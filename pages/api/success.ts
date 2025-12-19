// Next.js API Route 핸들러
export default function handler(req: any, res: any) {
    return res.status(200).json({
        message: 'Request successful.',
        receivedData: {}
    });
}