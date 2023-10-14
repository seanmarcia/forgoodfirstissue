import {Hero} from '@primer/react-brand';

export const HeroContainer = () => {
  return (
    <>
      <Hero className="hero" data-color-mode="dark">
        <Hero.Heading size="display">Committing to a better&nbsp;future</Hero.Heading>
        <Hero.Description size="300">
          Lend your skills to an open source project focused on the <a href="https://digitalpublicgoods.net/digital-public-goods/" target="_blank" rel="noopener noreferrer">Digital Public Goods (DPGs)</a> From fighting climate change, to solving world hunger, your efforts will contribute to creating a better future for everyone. Together, we can drive positive and lasting contributions to the world, one commit at a time.
        </Hero.Description>
        <Hero.PrimaryAction href="https://github.com/rubyforgood/happycommits/issues/new?assignees=&labels=💪+New+Project&projects=&template=suggest_project.yml&title=%5BNew+Project%5D%3A+%3Ctitle%3E">Contribute to a project</Hero.PrimaryAction>
      </Hero>
    </>
  );
};
