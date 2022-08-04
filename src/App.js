import { AppShell, Container, Header, Group, Title, Space } from '@mantine/core'
import './App.css'
import ProjectCard from './components/ProjectCard'
import Achievement from './components/Achievement'

function App() {
  return (
    <AppShell
    padding="md"
    header={<Header height={60} p="xs">{/* Header content */}</Header>}
    styles={(theme) => ({
      main: { backgroundColor: theme.colors.gray[0] },
    })}
  >
    {
      <>
      <Container size="md" px="xs">
        <Title order={2} align="center">Achievements</Title>
        <Group position="center">
          <Achievement
          image="https://libus.xyz/img/unihack.png"
          title="Most Entertaining Pitch"
          from="UNIHACK 2022"
          project="Food Frog"
          description="https://devpost.com/software/unobtainable-magic-tesseract"
          link=""
          />
          <Achievement
          image="https://libus.xyz/img/unihack.png"
          title="Best User Experience"
          from="UNIHACK 2022"
          project="Food Frog"
          description="https://devpost.com/software/unobtainable-magic-tesseract"
          />
          <Achievement
          image="https://libus.xyz/img/unihack.png"
          title="Most Creative Pitch"
          from="UNIHACK 2021"
          project="Gecko"
          description="https://devpost.com/software/gecko-oeh8sy"
          />
        </Group>
        <Space h="xl"/>
        <Title order={2} align="center" mb="lg">Projects</Title>
        <Group position="center">
            <ProjectCard
            title="keepo"
            description="A personal game development project. All development, visual art and scoring carried out by myself."
            fulldescription="Keepo is a game i developed in my spare time with the goal of expressing my creative skills, whilst learning the ropes of game development. The game centres around the titular character keepo, an unspecified animal type, and the friends whom they help out. All of the art, music, and development was completed by myself."
            image="https://img.itch.zone/aW1nLzc5MjE2MjAuZ2lm/original/LrrLTN.gif"
            language="GMS2"
            link="https://umconfortable.itch.io/keepo"
            type="personal"
            />
            <ProjectCard
            title="RMIT InfoTech Discord Bot"
            description="A Discord bot written for the RMIT InfoTech server. Providing a range of utility to students and discord admins"
            image="https://libus.xyz/img/discord.png"
            language="Python"
            type="personal"
            />
            <ProjectCard
            title="BuildPalettes"
            description="A Minecraft Spigot plugin that allows players to manage/share custom block palettes"
            image="https://libus.xyz/img/spigot.png"
            language="Java"
            type="personal"
            />
            <ProjectCard
            title="BlockColours"
            description="A Minecraft Spigot plugin that allows players to perform operations revolving around the colours of blocks. "
            image="https://libus.xyz/img/spigot.png"
            language="Java"
            type="personal"
            />
            <ProjectCard
            title="InstantBreak"
            description="A Minecraft Spigot plugin that allows players to instantly mine/break configured blocks. "
            image="https://libus.xyz/img/spigot.png"
            language="Java"
            type="commission"
            />
            <ProjectCard
            title="InstantBreak"
            description="A Minecraft Spigot plugin that allows players to instantly mine/break configured blocks. "
            image="https://libus.xyz/img/spigot.png"
            language="Java"
            type="commission"
            />
            <ProjectCard
            title="CyclePosters"
            description="A Minecraft Spigot plugin that allows admins to set up custom changing image posters in-game"
            image="https://libus.xyz/img/spigot.png"
            language="Java"
            type="commission"
            />
            <ProjectCard
            title="SkyCommand"
            description="A Minecraft Spigot plugin that allows admins to configure commands to be ran when players click the sky. "
            image="https://libus.xyz/img/spigot.png"
            language="Java"
            type="commission"
            />
            <ProjectCard
            title="NoHunger"
            description="A Minecraft Spigot plugin that disables hunger depletion. Written on request for the Shadow Kingdom Minecraft network."
            image="https://libus.xyz/img/spigot.png"
            language="Java"
            type="commission"
            />
            <ProjectCard
            title="CustomJoinMessages"
            description="A Minecraft Spigot plugin that allows users to customise their join/leave messages. Written on request for the Shadow Kingdom Minecraft network."
            image="https://libus.xyz/img/spigot.png"
            language="Java"
            type="commission"
            />
            <ProjectCard
            title="CustomJoinMessages"
            description="A Minecraft Spigot plugin that allows for creation of simple chat-based actions. Written on request for the Shadow Kingdom Minecraft network. "
            image="https://libus.xyz/img/spigot.png"
            language="Java"
            type="commission"
            />
            
        </Group>
        
      </Container>

      </>
    }
  </AppShell>
  );
}

export default App;
