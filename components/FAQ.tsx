"use client";

import { Accordion, Anchor, Code } from "@mantine/core";
import { IconBrandDiscordFilled, IconBrandWordpress, IconCode, IconQuestionMark } from "@tabler/icons-react";
import classes from "./FAQ.module.css";

type FAQsProps = {
  question: string;
  answer: string | JSX.Element;
  emoji?: string | JSX.Element;
};

const faqs: FAQsProps[] = [
  {
    question: "What is WP Bones?",
    emoji: "🦴",
    answer:
      "WP Bones is a framework for WordPress developers that enables you to create plugins using a Laravel-like syntax. It generates clean, well-structured code for your WordPress plugins.",
  },
  {
    question: "How do I use WP Bones?",
    emoji: "🤔",
    answer: (
      <>
        To start using WP Bones, install the{" "}
        <Anchor href="/docs/GettingStarted/boilerplate-templates">WP Bones starter plugin</Anchor> in your local
        WordPress installation.
      </>
    ),
  },
  {
    question: "Is WP Bones free?",
    emoji: "💰",
    answer: "Yes, WP Bones is free to use.",
  },
  {
    question: "Can I use WP Bones on my client websites?",
    emoji: <IconBrandWordpress />,
    answer: "Yes, you can use WP Bones on your client websites.",
  },
  {
    question: "Can I customize the code generated by WP Bones?",
    emoji: <IconCode />,
    answer:
      "Yes, you can customize the code generated by WP Bones. The plugin generates clean and well-structured code that you can modify to suit your needs.",
  },
  {
    question: "How can I contribute to WP Bones core Framework?",
    emoji: <IconCode />,
    answer: (
      <>
        You can contribute to WP Bones by submitting a pull request on the{" "}
        <Anchor href="https://github.com/wpbones/WPBones">GitHub repository</Anchor>.
      </>
    ),
  },
  {
    question: "How can I contribute to WP Bones Documentation?",
    emoji: "📚",
    answer: (
      <>
        You can contribute to WP Bones by submitting a pull request on the{" "}
        <Anchor href="https://github.com/wpbones/website-docs">GitHub repository</Anchor>.
      </>
    ),
  },
  {
    question: "How can I report a bug?",
    emoji: "🐞",
    answer: (
      <>
        You can report a bug by submitting an issue on the{" "}
        <Anchor href="https://github.com/wpbones/WPBones">GitHub repository</Anchor>.
      </>
    ),
  },
  {
    question: "How can I request a feature?",
    emoji: "💡",
    answer: (
      <>
        You can request a feature by submitting an issue on the{" "}
        <Anchor href="https://github.com/wpbones/WPBones">GitHub repository</Anchor>.
      </>
    ),
  },
  {
    question: "How can I contact the WP Bones team?",
    emoji: "📧",
    answer: (
      <>
        You can contact the WP Bones team by sending an email to{" "}
        <Anchor href="mailto:wpbones.info@gmail.com">wpbones.info@gmail.com</Anchor>
      </>
    ),
  },
  {
    question: "How can I update my previous WP Bones plugin?",
    emoji: "🔄",
    answer: (
      <>
        You can update your WP Bones plugin by running the following command in your plugin directory:
        <Code>php bones update</Code> and check the{" "}
        <Anchor href="/docs/CorePluginFiles/overview">Core Plugin Files</Anchor>.
      </>
    ),
  },
  {
    question: "Is there any support and community for WP Bones?",
    emoji: <IconBrandDiscordFilled />,
    answer: (
      <>
        Yes, you can join the WP Bones community on <Anchor href="https://discord.gg/5bdVyycU8F">Discord</Anchor> and
        ask questions or share your experience with other developers.
      </>
    ),
  },
];

export function FAQs() {
  const items = faqs.map((faq, index) => (
    <Accordion.Item key={index} value={faq.question}>
      <Accordion.Control icon={faq.emoji ?? <IconQuestionMark />}>{faq.question}</Accordion.Control>
      <Accordion.Panel>{faq.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion mt={24} defaultValue="What is WP Bones?" classNames={classes}>
      {items}
    </Accordion>
  );
}
