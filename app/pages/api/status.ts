// Next.js API Route 핸들러
export default function handler(req: any, res: any) {
    // GET 요청이 아닌 경우 405 Method Not Allowed 반환 (선택 사항)
    if (req.method !== 'POST') {
        // 405 Method Not Allowed
        return res.status(405).json({
            error: `Method ${req.method} Not Allowed`
        });
    }

    // 1. 요청 본문(Body)에서 데이터를 확인합니다.
    const { data } = req.body;

    // --- 400 Bad Request 발생 조건 ---
    // 요청 본문에 'data' 필드가 없거나 비어있는 경우
    if (!data) {
        // 400 Bad Request
        // 클라이언트가 잘못된 요청을 보냈음을 나타냅니다.
        return res.status(400).json({
            error: 'Data field is required in the request body.'
        });
    }

    // --- 200 OK 발생 조건 ---
    // 요청 본문에 'data' 필드가 있고 유효한 경우
    // 이 조건을 충족하면, 성공적인 처리가 완료된 것으로 간주합니다.
    if (data === 'valid_input') {
        // 200 OK
        // 요청이 성공적으로 처리되었음을 나타냅니다.
        return res.status(200).json({
            message: 'Request successful.',
            receivedData: data
        });
    }

    // data가 있지만 'valid_input'이 아닌 경우, 다른 4xx 오류를 반환할 수도 있습니다.
    // 예를 들어 422 Unprocessable Entity
    return res.status(422).json({
        error: 'The provided data is not a valid input.',
        receivedData: data
    });
}