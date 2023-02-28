![openai3.png](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/openai3.png)

# Accessibility for Visually Impaired Users
  
## Running the Project:
1. Clone the repo by running the following command: **`git clone https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly.git`**

2. **`cd`** into the root directory and run **`npm install`** to install server dependencies

3. **`cd`** into the **`client`** directory and run **`npm install`** to install the client dependencies
   
4. While still inside the **`client`** directory, use **`npm start`** to run the frontend 
   
5. **`cd..`** back into the root directory, then **`cd`** into the **`server`** directory and use **`npm start`** to start our backend
---

## Project Overview:

This application was specifically built as a prototype to address the problem of new technologies not always having assistive or accessibility features for disabled individuals 

The OpenAI API is used as an example of how data returned from API endpoints can be transformed using text-to-speech and speech-to-text services, increasing accessibility for people with disabilities and making digital products and services more usable for everyone

---

## Problem Statement:

[According to the World Health Organization (WHO)](https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment), approximately 253 million people worldwide have moderate to full blinding vision impairments, while [a audit by the World Wide Web Consortium (W3C](https://www.isemag.com/professional-development-leadership/article/14267164/98-of-websites-fail-to-comply-with-accessibility-requirements-for-people-with-disabilities)) found 98% of websites fail to meet accessibility standards.

Text-to-speech technology converts written text into spoken words, allowing people with visual impairments or reading difficulties to access written text.

Speech-to-text technology converts spoken words into written text, allowing people with physical disabilities or difficulty typing to interact with digital devices and services.

---

## **Code Explanations:**

<!-- ----------------------------------------------------------------------------------------------------- -->
---
## Front End Code
![home.png](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/frontend-landing-page.png)


- ### [Front End Diagram](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/mds/Front%20End%20Diagram.md)
  
- ### [Recording Users Question to MP3](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/mds/Recording%20Our%20Users%20Question%20to%20MP3.md)

- ### [Transcribing Questions From MP3 to Text](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/mds/Transcribing%20Our%20Users%20Question%20From%20MP3%20to%20Text.md)












<!-- ----------------------------------------------------------------------------------------------------- -->
---
## Back End Code
![chatserver1](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-directory-colored_1_51.png)

- ### [Back End Diagram](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/mds/Back%20End%20Diagram.md)
  
- ### [Sending Our Users Text Question to OpenAI and Getting a Text Answer Back](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/mds/Sending%20Our%20Users%20Text%20Question%20to%20OpenAI%20and%20Getting%20a%20Text%20Answer%20Back.md)
  
- ### [Converting Our Text Answer To MP3 and Returning It Back To Our User](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/mds/Converting%20Our%20Text%20Answer%20To%20MP3%20and%20Returning%20It%20Back%20To%20Our%20User.md)











<!-- ----------------------------------------------------------------------------------------------------- -->
---
## Database Code
![chatserverdb2](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-database-db-snapshot.PNG)

- ### [Saving Our Users Questions and Answers To Our Database](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/mds/Saving%20Our%20Users%20Questions%20and%20Answers%20To%20Our%20Database.md)



