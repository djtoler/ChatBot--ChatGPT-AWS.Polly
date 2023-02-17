# Accessibility for Visually Impaired Users

- [Running the Project](#running-the-project)
  * [Instructions](#instructions)

- [Project Overview](#project-overview)
 
- [Problem Statement](#problem-statement)
   
- [Code Explinations](#code-explinations)
  * [Front End](#front-end)
    + [Front End Diagram](#front-end-diagram)
    + [Recording Our Users Question to MP3](#recording-our-users-questions-to-mp3)
    + [Transcribing Our Users Question from MP3 to Text](#transcribing-our-users-question-from-to-mp3-to-text)
  * [Back End](#back-end)
    + [Back End Diagram](#front-end-diagram)
    + [Sending Our Users Text Question to OpenAI and Getting a Text Answer Back](#sending-our-users-text-question-to-openAI-and-getting-a-text-answer-back)
    + [Converting Our Text Answer To MP3 and Returning It Back To Our User](#converting-our-text-answer-to-MP3-and-returning-it-back-to-our-user)
  * [Database](#database)
    + [Saving Our Users Questions and Answers To Our Database](#saving-our-users-questions-and-answers-to-our-database)
  
![openai3.png](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/openai3.png)

## Project Overview:

This application was specifically built as a prototype to address the problem of new technologies not always having assistive or accessibility features for disabled individuals 

The OpenAI API is used as an example of how data returned from API endpoints can be transformed using text-to-speech and speech-to-text services, increasing accessibility for people with disabilities and making digital products and services more usable for everyone

## Problem Statement:

[According to the World Health Organization (WHO)](https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment), approximately 253 million people worldwide have moderate to full blinding vision impairments, while [a audit by the World Wide Web Consortium (W3C](https://www.isemag.com/professional-development-leadership/article/14267164/98-of-websites-fail-to-comply-with-accessibility-requirements-for-people-with-disabilities)) found 98% of websites fail to meet accessibility standards.

Text-to-speech technology converts written text into spoken words, allowing people with visual impairments or reading difficulties to access written text.

Speech-to-text technology converts spoken words into written text, allowing people with physical disabilities or difficulty typing to interact with digital devices and services.

## **Code Explanations:**

## ***Front End***

![Untitled](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/Untitled.png)

[Front End Diagram](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/Front%20End%20Diagram%20d79f410d01e440c993576bea2f0b4f6c.md)

[*Recording Our Users Question to MP3*](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/Recording%20Our%20Users%20Question%20to%20MP3%203e76a117f9ce4c3198e2ecf953f167ee.md)

[***Transcribing Our Users Question From MP3 to Text***](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/Transcribing%20Our%20Users%20Question%20From%20MP3%20to%20Text%20bc8d6af347e444c29890f1ba47e0ed03.md)

## ***Back End***

![Untitled](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/Untitled%201.png)

[Back End Diagram](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/Back%20End%20Diagram%20d67e9efc66e241fe83f814f522673dd4.md)

[Sending Our Users Text Question to OpenAI and Getting a Text Answer Back](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/Sending%20Our%20Users%20Text%20Question%20to%20OpenAI%20and%20Gett%205622eed243eb4358b6cd74bed964c90d.md)

[Converting Our Text Answer To MP3 and Returning It Back To Our User](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/Converting%20Our%20Text%20Answer%20To%20MP3%20and%20Returning%20It%20bfcfe9afdeb94eea91411c8b68d99b05.md)

## ***Database***

[Saving Our Users Questions and Answers To Our Database](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/Saving%20Our%20Users%20Questions%20and%20Answers%20To%20Our%20Data%2015330cb576194034b091c781a7979982.md)

![Untitled](Accessibility%20for%20Visually%20Impaired%20Users%20a36a010f9e694a919067110abd7824be/Untitled%202.png)

# Front End Diagram

![Untitled](Front%20End%20Diagram%20d79f410d01e440c993576bea2f0b4f6c/Untitled.png)

The picture below is a screenshot of our UI with the different components laid out. 

***Number 1*** is the Background Image component. 

***Number 2*** is the Text To Speech & Speech To Text Conversion Form Component

***Number 3*** is the Conversion Form Header 

***Number 4*** is the Audio Instructions Component

![Untitled](Front%20End%20Diagram%20d79f410d01e440c993576bea2f0b4f6c/Untitled%201.png)

![Untitled](Front%20End%20Diagram%20d79f410d01e440c993576bea2f0b4f6c/Untitled%202.png)
