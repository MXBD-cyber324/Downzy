export default async function handler(req, res) {

    try {

        const url = req.query.url;

        if (!url) {
            return res.status(400).json({
                status: false,
                message: "URL Missing"
            });
        }

        const apiUrl =
            `https://nayan-video-downloader.vercel.app/alldown?url=${encodeURIComponent(url)}`;

        const response = await fetch(apiUrl);

        const data = await response.json();

        return res.status(200).json(data);

    } catch (error) {

        return res.status(500).json({
            status: false,
            message: error.message
        });

    }

}
