"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const Accordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const handleClick = (number: number) => {
    if (!accordionOpen) {
      setAccordionOpen(true);
      setIndex(number);
    } else {
      if (number !== index) {
        setIndex(number);
        setAccordionOpen(true);
      } else {
        setIndex(0);
        setAccordionOpen(false);
      }
    }
  };

  return (
    <>
      <div className={`faq__item ${index === 1 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(1)}>
          <div className="faq__item-title">How does FANA.AI work?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 1 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            FANA.AI is an advanced artificial intelligence system designed to enhance customer and team interactions in
            your business. FANA.AI trains on your company&apos;s knowledge base to provide instant, accurate responses
            across communication channels. It uses a combination of proprietary aggregation of LLMs, image processing,
            and a custom-trained knowledge base to understand and support users. FANA.AI can handle everything from
            simple FAQs to complex inquiries, using context management to maintain coherent conversations. When
            necessary, it can seamlessly escalate issues to human agents.
            <br /> <br /> You can integrate FANA with a few lines of code on your website. Also, through your dedicated
            Telegram/Discord as a moderator.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 2 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(2)}>
          <div className="faq__item-title">What does the FANA.AI onboarding look like for the client?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 2 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            The FANA.AI onboarding process is a collaborative and streamlined journey, typically completed within a
            week. Here&apos;s what clients can expect:
            <ol>
              <li>
                Initial Consultation: We begin by understanding your specific needs, goals, and use cases for FANA.AI.
              </li>
              <li>
                Knowledge Base Development: You provide us with training materials such as FAQs, whitepapers, product
                information, and relevant content. We use this to build your custom FANA.AI knowledge base and set up
                ongoing updates for your bot.
              </li>
              <li>
                AI Training and Demo: We train a demo version of FANA.AI using your materials. You&apos;ll have the
                opportunity to test and provide feedback on this demo bot.
              </li>
              <li>
                Integration Setup: Once you&apos;re satisfied with the demo, we proceed to integrate FANA.AI with your
                chosen platforms (e.g., website, Telegram, Discord).
              </li>
              <li>
                Fine-tuning and Testing: We conduct rigorous testing across various scenarios to ensure FANA.AI performs
                optimally in different situations.
              </li>
              <li>
                Staff Training: We provide training for your team on how to manage, monitor, and optimize FANA.AI.
              </li>
              <li>
                Soft Launch: We implement a controlled rollout where FANA.AI is added as a support role in your chosen
                platforms. It can be triggered by specific commands or by recognizing relevant questions.
              </li>
              <li>
                Full Deployment: After any final adjustments, FANA.AI is fully deployed across all intended channels.
              </li>
              <li>
                Ongoing Support: Our team provides continuous support throughout the process and assists with retraining
                for new content as your business evolves.
              </li>
            </ol>
            The FANA onboarding process is a streamlined, collaborative journey tailored to each client&apos;s needs.
            Our goal is to make it as efficient and effective as possible, setting you up for long-term success with
            FANA.AI.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 3 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(3)}>
          <div className="faq__item-title">How do we re-train and update FANA.AI with new business data?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 3 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            You can re-train your bot via our support or use a dedicated dashboard. We are also integrating a
            self-learning mechanism which will spread up the process of updating the knowledge base.
            <ul>
              <li>
                Regular Updates: You can add new information, FAQs, or policies to the knowledge base through a
                user-friendly interface or our support.
              </li>
              <li>
                Feedback Loop: FANA.AI learns from each interaction. You can review conversations and flag any incorrect
                or suboptimal responses for improvement.
              </li>
              <li>
                Periodic Reviews: We recommend scheduled reviews of FANA&apos;s performance, where you can analyze
                common queries and update responses accordingly.
              </li>
              <li>
                Custom Training Sessions: For significant changes or new product launches, we offer custom training
                sessions to quickly update FANA&apos;s knowledge.
              </li>
              <li>
                Automated Learning: FANA uses machine learning to continually refine its responses based on user
                interactions and feedback.
              </li>
              <li>
                Content Integration: New content from your website, documentation, or other sources can be automatically
                integrated into FANA knowledge base.
              </li>
              <li>
                Human Oversight: Your team can oversee the learning process, approving changes and ensuring the
                AI&apos;s responses align with your brand voice and policies.
              </li>
            </ul>
            This approach ensures that FANA.AI remains up-to-date, accurate, and aligned with your evolving business
            needs.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 4 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(4)}>
          <div className="faq__item-title">Which platforms does FANA.AI integrate with?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 4 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            FANA.AI integrates with 30+ platforms including Discord, Telegram, Slack, Zendesk, Intercom, WhatsApp, and
            more. It can also be integrated into company websites and various social media channels for particular use
            cases.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 5 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(5)}>
          <div className="faq__item-title">What are the key benefits of using FANA.AI?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 5 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            Key benefits include:
            <ul>
              <li>Automated responses to FAQs, reducing workload on client and support staff</li>
              <li>Ability to tap your business databank with a prompt, and keep going</li>
              <li>Faster response times (typically 10x quicker than manual replies)</li>
              <li>24/7 availability for customer support</li>
              <li>Improved customer satisfaction through instant issue resolution</li>
              <li>Reduced operational costs</li>
              <li>Assistance in lead generation and sales growth</li>
              <li>Multilingual support for diverse customer bases</li>
              <li>Custom notifications and humans in the loop</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 6 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(6)}>
          <div className="faq__item-title">How does FANA.AI handle data security and privacy?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 6 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            FANA.AI is designed with robust security measures to protect sensitive information. It adheres to strict
            data privacy regulations and ensures that all interactions and data handled by the AI are secure.
            <br />
            <br /> Our system architecture is designed with the latest security standards. All data is siloed and FANA
            agents can be deployed on your servers. In addition, we are in the process of acquiring SOC2 Certificates.
            Privacy and data security are our top priorities.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 7 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(7)}>
          <div className="faq__item-title">Is FANA.AI customized for my business?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 7 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            Yes. FANA.AI can be fully customized to reflect your brand&apos;s knowledge, unique voice, communication
            channels and style. This includes personalizing the tone of the chatbot, and how much it knows about the use
            case to solve, so it can tailor the best responses to align with your brand&apos;s goals. Choosing FANA
            means plugging AI into your business that supports your ongoing company transformation, and is aligned with
            your unique culture, team and customer needs.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 8 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(8)}>
          <div className="faq__item-title">How does FANA.AI improve over time?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 8 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            FANA is committed to continuous improvement. Our platform evolves regularly, driven by customer feedback,
            industry trends, and the latest technology. Combining this with AI-driven insights, we refine our
            proprietary stack and improve integration capabilities. We use best practices to stay ahead of the curve and
            deliver state-of-the-art solutions that deliver a better AI experience.
            <br />
            <br /> Ongoing key improvements include:
            <ul>
              <li>
                Contextual Understanding: Our advanced reason-act content management framework enables FANA to grasp
                human communication nuances, providing more accurate and relevant responses.
              </li>
              <li>
                Multi-Modal Integration: We update FANA to enable it to perform best for customers and apply top AI
                models best suited for the use case.
              </li>
              <li>
                Enhanced Interactions: Users can engage with FANA.AI through text, voice and vision for a seamless
                experience.
              </li>
              <li>
                Real-Time Insights: Our analytic hub provides instant feedback on customer interactions, response
                effectiveness, and community engagement patterns to empower the continuous improvement of FANA.AI.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 9 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(9)}>
          <div className="faq__item-title">What kind of analytics and insights does FANA.AI offer?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 9 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            We provide an actionable insights hub to help you optimize your AI&apos;s performance and understand your
            audience&apos;s behavior. Our analytic hub offers:
            <br />
            <br /> Bot usage trends help you get a clear picture of how your bot is being used throughout the days of
            the week. This lets you better identify demand and plan your support strategies accordingly.
            <br />
            <br /> Top AI topics help you discover particular cases, the most popular topics, and important themes. This
            helps you understand what&apos;s driving conversations and adjust your support strategies to create
            excellent customer service.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 10 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(10)}>
          <div className="faq__item-title">How is FANA.AI different from other chatbots?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 10 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            FANA.AI is a cutting-edge AI platform that differentiates itself from other chatbots in several key areas:
            <ol>
              <li>
                Proprietary Context Management: FANA.AI&apos;s context management reason-act framework enables the
                platform to understand your business knowledge and align it to the nuances of human communications.
                These techniques create more accurate and relevant team and customer support responses.
              </li>
              <li>
                Multi-LLM Integrations: FANA.AI integrates and supports the latest and the fastest Large Language Models
                (LLMs) such as LLaMa, Mistral, Claude and GPT and others to provide more comprehensive and accurate
                responses tailored to different use cases.
              </li>
              <li>
                Multi-channel Interactions: FANA.AI enables interactions in various social channels and CRMs, including
                text, voice, vision, and diffusion.
              </li>
              <li>
                Real-time Insights: FANA.AI&apos;s analytic hub provides instant feedback on customer interactions,
                response effectiveness, community engagement patterns, and other aspects of business.
              </li>
              <li>
                Customization: FANA.AI offers extensive customization options, enabling businesses to tailor the
                platform to their specific use cases and communication channels.
              </li>
              <li>
                Notifications and humans in the loop: The platform enables critical notification to responsible team
                members by email, Telegram, Trello or other tools.
              </li>
              <li>
                Integration with Social Media and CRM: FANA.AI integrates with 30+ popular third-party services, such as
                Discord, Zendesk, Telegram, LinkedIn, WhatsApp and more.
              </li>
              <li>
                Language Support: FANA.AI supports 50+ languages, including English, Spanish, French, German, Italian,
                Portuguese, and many more.
              </li>
              <li>
                Voice and Image Support: FANA.AI supports voice and image interactions, allowing users to engage with
                the platform through various channels.
              </li>
              <li>
                Continuous AI training: FANA.AI continuously learns and improves its responses based on user
                interactions, feedback, and evolving business data.
              </li>
            </ol>
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 11 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(11)}>
          <div className="faq__item-title">Does FANA provide white-glove ongoing support?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 11 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            FANA offers comprehensive support including setup, integration, staff training, and ongoing assistance to
            ensure smooth implementation and optimization of the AI in your business environment.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 12 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(12)}>
          <div className="faq__item-title">What is the pricing structure for FANA.AI services?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 12 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            FANA.AI offers flexible pricing tailored to your specific needs. Typically, it includes a base fee for
            training and maintenance, with additional costs for extra languages, app integrations, and user intent
            flows. For detailed pricing information, please contact our sales team at{" "}
            <a href="mailto:hello@fana.ai">hello@fana.ai</a>
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 13 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(13)}>
          <div className="faq__item-title">How can I get started with FANA.AI?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 13 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            Just email <a href="mailto:hello@fana.ai">hello@fana.ai</a> to get started.{" "}
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 14 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(14)}>
          <div className="faq__item-title">Are there additional features that can be integrated with FANA?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 14 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            Yes, FANA offers several additional features for integration, including:
            <ul>
              <li>Custom intent flows (e.g., booking calls, cancellations, modifications)</li>
              <li>Lead data collection to Google Sheets</li>
              <li>Notifications to multiple platforms (Slack, Notion, Airtable, Telegram, Discord, WhatsApp)</li>
              <li>Integration with various messaging apps</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 15 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(15)}>
          <div className="faq__item-title">Is there a feedback system for FANA.AI&apos;s performance?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 15 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            Yes, FANA.AI incorporates mechanisms for collecting and analyzing user feedback. This system allows for
            continuous improvement of the AI&apos;s performance. Clients have access to conversation logs 24/7, enabling
            them to monitor interactions and assess the AI&apos;s effectiveness.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 16 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(16)}>
          <div className="faq__item-title">How does FANA.AI incorporate human-in-the-loop processes?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 16 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            FANA.AI supports human-in-the-loop operations to ensure optimal performance and user experience. While the
            AI handles most queries automatically, it&apos;s designed to recognize complex or sensitive situations that
            require human intervention. In such cases, FANA seamlessly transfers the conversation to a human agent,
            providing them with the full context of the interaction. This hybrid approach combines the efficiency of AI
            with the nuanced understanding of human operators, ensuring that all customer needs are met appropriately.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 17 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(17)}>
          <div className="faq__item-title">How can FANA.AI help my Sales Process? </div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 17 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            FANA.AI revolutionizes your sales process by automating key tasks and enhancing customer interactions. It
            qualifies leads 24/7, provides instant responses to inquiries, and offers personalized product
            recommendations. FANA.AI also excels at outreach, crafting tailored messages to engage prospects across
            multiple channels, from email to social media. It can handle initial conversations, answer FAQs, and
            seamlessly schedule meetings by integrating with your team&apos;s calendar. FANA.AI sends timely
            notifications to your sales team ensuring no opportunity is missed.
          </div>
        </motion.div>
      </div>
      <div className={`faq__item ${index === 18 ? "open" : ""}`}>
        <div className="faq__question" onClick={() => handleClick(18)}>
          <div className="faq__item-title">Do you have documentation for FANA.AI? Where can I learn more?</div>
          <div className="faq__plus"></div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: index === 18 ? "auto" : 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className="faq__answer">
            Homepage: <a href="https://fana.ai">https://fana.ai</a>
            <br />
            Docs: <a href="https://docs.fana.ai">https://docs.fana.ai</a>
            <br />
            Blog: <a href="https://aiblog.fana.ai">https://aiblog.fana.ai</a>
          </div>
        </motion.div>
      </div>
    </>
  );
};
