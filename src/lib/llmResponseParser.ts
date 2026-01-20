
export interface UIAction {
    type: 'button' | 'link' | 'copy' | 'card' | 'function';
    label: string;
    action?: string;
    href?: string;
    value?: string;
    meta?: Record<string, string>;
}

export interface ChatResponse {
    message: string;
    intent: string;
    ui_actions?: UIAction[];
}

export function parseLLMResponse(responseText: string): ChatResponse {
    try {
        return JSON.parse(responseText);
    } catch (e) {
        console.warn('Failed to parse JSON response', e);
        const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch && jsonMatch[1]) {
            try {
                return JSON.parse(jsonMatch[1]);
            } catch (e2) {
                console.warn('Failed to parse inner JSON block', e2);
            }
        }

        console.warn('LLM response format invalid, fallback to plain text', responseText);
        return {
            message: responseText,
            intent: 'general',
            ui_actions: []
        };
    }
}
