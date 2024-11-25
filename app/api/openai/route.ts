import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

//  The runtime variable is used to specify the runtime environment that the code will run in.

export const runtime = "edge";

//  Here, we have a simple OpenAI API client that we can use to interact with the OpenAI API.
//  Next, we need to create a new route that will use this client to interact with the OpenAI API.

export async function POST(request: Request) {
  const { messages } = await request.json();

  const response = streamText({
    model: openai("gpt-4"),
    messages,
  });

  return response.toDataStreamResponse();
}
