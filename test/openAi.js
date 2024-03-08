import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateOpenAIResponse(userMessage) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage },
      ],
      model: 'gpt-3.5-turbo',
    });

    const assistantResponse = completion.choices[0].message.content;
    return assistantResponse;
  } catch (error) {
    console.error('Error generating OpenAI response:', error.message);
    return 'An error occurred while generating the response.';
  }
}

const userMessage = 'Tell me a joke.';
generateOpenAIResponse(userMessage)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
