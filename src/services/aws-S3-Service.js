const {
    S3Client,
    PutObjectCommand,
    DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const fs = require("fs");

const client = new S3Client({
    region: process.env.AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.AWS_PUBLIC_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    },
});

const uploadFile = async (file) => {
    const stream = fs.createReadStream(file.path);
    const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.filename,
        Body: stream,
    };
    try {
        await client.send(new PutObjectCommand(uploadParams));
        fs.unlinkSync(file.path);
        const s3Url = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${file.filename}`;
        return s3Url;
    } catch (error) {
        console.log(error);
    }
};

const deleteFile = (filename) =>
    client.send(
        new DeleteObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: filename,
        })
    );

module.exports = { uploadFile, deleteFile };
