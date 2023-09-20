import OpenAI from 'openai';
import { OPEN_AI_KEY } from './Constant';

const openai = new OpenAI({
    apiKey: OPEN_AI_KEY, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true
});

export default openai;