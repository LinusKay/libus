import { AppShell, Container, Header, Group, Title, Space, Card, Avatar, Grid, Text, Button, Timeline, List, Stepper } from '@mantine/core'
import { IconBrandLinkedin, IconBrandInstagram, IconBuilding, IconSchool } from '@tabler/icons'
import { useState, useEffect } from 'react';
import './App.css'
import ProjectCard from './components/ProjectCard'
import Achievement from './components/Achievement'

function App() {

  useEffect(() => {
    document.title = "Linus Kay - Technical Assistant"
  }, [])

  const [active, setActive] = useState(1);

  return (
    <AppShell
    padding="md"
    // header={}
    styles={(theme) => ({
      main: { 
        backgroundColor: theme.colors.gray[0] 
      },
    })}
  >
    {
      <>
      {/* <Header height={60} p="xs">Header content</Header> */}
      <Container size="md" px="xs">
        <Container size="md" px="xs" mt="md">
        {/* <Card shadow="md" p="xl" mb="xl" radius={150}> */}
        <Group position="center">
          <Avatar 
            size={200}
            radius={100}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFLBqQU2QbQWA/profile-displayphoto-shrink_800_800/0/1639607722290?e=1666224000&v=beta&t=0qK3jv59UPYnULEa2s66UK64Jh4it4sWVQQXzd1luMk"
          />
          </Group>
            <Title align="center">Linus Kay</Title>
            <Text align="center" color="dimmed" size={20} mb="md">Technical Assistant at Honeylight Consulting</Text>
            <Text align="center" color="dimmed">IT Technician with a passion for cybersecurity. Currently Co-President of the RMIT Information Security Collective, alongside completing a Bachelor of Information Technology.</Text>
            <Group position="center">
            <Button radius="xl" size="md" ml={0} mr="md" mt="md" p="xs" variant="outline" component="a" href="https://linkedin.com/in/linus-kay"><IconBrandLinkedin/></Button>
            <Button radius="xl" size="md" ml={0} mr="md" mt="md" color="orange" p="xs" variant="outline" component="a" href="https://instagram.com/linus_kay"><IconBrandInstagram/></Button>
            </Group>
        
          {/* <Grid justify="center">  
            <Grid.Col span={3}>
              <Avatar 
              size={200}
              radius={100}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFLBqQU2QbQWA/profile-displayphoto-shrink_800_800/0/1639607722290?e=1666224000&v=beta&t=0qK3jv59UPYnULEa2s66UK64Jh4it4sWVQQXzd1luMk"
              />
            </Grid.Col>
            <Grid.Col span={8}>
              <Title>Linus Kay</Title>
              <Text color="dimmed">Technical Assistant at Honeylight Consulting</Text>
              <Text color="dimmed">IT Technician with a passion for cybersecurity. Currently Co-President of the RMIT Information Security Collective, alongside completing a Bachelor of Information Technology.</Text>
              <Button radius="xl" size="md" ml={0} mr="md" mt="md" p="xs" variant="outline" component="a" href="https://linkedin.com/in/linus-kay"><IconBrandLinkedin/></Button>
              <Button radius="xl" size="md" ml={0} mr="md" mt="md" color="orange" p="xs" variant="outline" component="a" href="https://instagram.com/linus_kay"><IconBrandInstagram/></Button>
            </Grid.Col>
          </Grid> */}
        </Container>
        <Space h={50} />
        {/* <Container size="sm" px="xs" mt="md" mb="xl">
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step component="a" href="#timeline" label="Employment/Education" description="Timeline of career/study milestones"/>
            <Stepper.Step component="a" href="#achievements" label="Achievements" description="Notable awards"/>
            <Stepper.Step component="a" href="#projects" label="Projects" description="Projects I have been involved in"/>
            <Stepper.Completed/>
          </Stepper>
        </Container> */}

        <Container size="sm" px="xs">
          <Title order={2} align="center" mb="lg" id="timeline">Employment</Title>
          <Timeline active={5} bulletSize={30} lineWidth={3} color="gray">
            <Timeline.Item bullet={<IconBuilding size={16} />} title="Technical Assistant at Honeylight Consulting">
              <Text color="dimmed" size="sm">IT technician providing level 1 & 2 support to a range of clients, through face-to-face and remote engagements. Managed firewalls, implemented SSL certificates, provided remote troubleshooting and solution delivery, managed client reports</Text>
              <Text size="xs" mt={4}>May 2022 - Present</Text>
            </Timeline.Item>
            <Timeline.Item 
              bulletSize={25} 
              bullet={<Avatar size={30} radius={15} src="https://media-exp1.licdn.com/dms/image/C4E0BAQEGUc6AHygkyA/company-logo_200_200/0/1614744051680?e=2147483647&v=beta&t=ixcoUQtIu1OAF5BIKyCqoEtTqN2rsLifoI7vDyUbO0E"/>}  
              title="RMIT Information Security Collective">
              <List size="sm" color="red">
                <List.Item>Event coordination</List.Item>
                <List.Item>Student engagement</List.Item>
                <List.Item>Sponsor procurement</List.Item>
              </List>
              <Text color="dimmed" size="sm">President</Text>
              <Text size="xs" mt={4}>Oct 2021 - Present</Text>
              <Text color="dimmed" size="sm">Secretary</Text>
              <Text size="xs" mt={4}>Nov 2020 - Oct 2021</Text>
            </Timeline.Item>
            <Timeline.Item 
              bulletSize={25} 
              bullet={<Avatar size={30} src="https://avatars.githubusercontent.com/u/20478505?s=200&v=4"/>} 
              title="RMIT Programming Club">
              <Text color="dimmed" size="sm">Design & Media Lead</Text>
              <Text color="dimmed" size="sm">Coordinated visual media for student club along with a team of executives and designers.</Text>
              <Text size="xs" mt={4}>Oct 2020 - Present</Text>
            </Timeline.Item>
            <Timeline.Item 
            bulletSize={1} 
            bullet={<Avatar size={25} src="https://i.imgur.com/JIgGyNT.png" mt="md"/>} 
            title="Orders Officer at Essential Caravans">
              <Text color="dimmed" size="sm" mb="xs">Handled all incoming customer orders from partner companies, communicating with representatives to ensure all customer requests are met. Ordered additional stock and filed paperwork for interstate businesses. In this time trained two employees in adjacent positions.</Text>
              <Text color="dimmed" size="sm" mb="xs">Additionally, worked as an intermediary and informal business analyst for some time, overseeing the production of an online product ordering system for use by company partners, involving:</Text> 
              <List size="sm" color="red">
                  <List.Item> translation of company requirements into workable solutions</List.Item>
                  <List.Item> direct communication with overseas development bodies</List.Item>
                  <List.Item> face-to-face and online training of multiple local and external parties, often involving interstate travel</List.Item>
                  <List.Item> quality analysis to ensure users were provided with a system that was easy to use and navigate</List.Item>
              </List>
              <Text color="dimmed" size="sm" mb="xs">Remained as an external contact for technical support for 3 months post-resignation.</Text>
              <Text size="xs" mt={4}>Oct 2018 - Oct 2020</Text>
            </Timeline.Item>
          </Timeline>
        </Container>

        <Space h={50} />
        <Container size="sm" px="xs">
          <Title order={2} align="center" mb="lg" id="timeline">Education</Title>
          <Timeline active={5} bulletSize={1} lineWidth={3} color="gray">
            <Timeline.Item bullet={<Avatar size={30} src="https://i.imgur.com/Yb5Xz6t.png" mt="lg"/>} title="Bachelor of Information Technology">
              <Text color="dimmed" size="sm"></Text>
              <Text size="xs" mt={4}>2020 - 2022</Text>
            </Timeline.Item>
            <Timeline.Item bullet={<Avatar size={30} src="https://i.imgur.com/Yb5Xz6t.png" mt="lg"/>} title="Diploma of Information Technology">
              <Text color="dimmed" size="sm"></Text>
              <Text size="xs" mt={4}>2018 - 2019</Text>
            </Timeline.Item>
          </Timeline>
        </Container>
          
        <Space h={50} />
        {/* </Card> */}
        <Title order={2} align="center" id="achievements">Achievements</Title>
        <Group position="center">
          <Achievement
          image="https://libus.xyz/img/unihack.png"
          title="Most Entertaining Pitch, Best User Experience"
          from="UNIHACK 2022"
          project="Food Frog"
          description="https://devpost.com/software/unobtainable-magic-tesseract"
          link="https://devpost.com/software/unobtainable-magic-tesseract"
          />
          <Achievement
          image="https://libus.xyz/img/unihack.png"
          title="Most Creative Pitch"
          from="UNIHACK 2021"
          project="Gecko"
          description="https://devpost.com/software/gecko-oeh8sy"
          link="https://devpost.com/software/gecko-oeh8sy"
          />
        </Group>
        <Space h="xl"/>
        <Title order={2} align="center" mb="lg" id="projects">Projects</Title>
        <Group position="center">
            <ProjectCard
            title="keepo"
            description="A personal game development project. All development, visual art and scoring carried out by myself."
            fulldescription="Keepo is a game i developed in my spare time with the goal of expressing my creative skills, whilst learning the ropes of game development. The game centres around the titular character keepo, an unspecified animal type, and the friends whom they help out. All of the art, music, and development was completed by myself."
            image="https://img.itch.zone/aW1nLzc5MjE2MjAuZ2lm/original/LrrLTN.gif"
            language="GMS2"
            link="https://umconfortable.itch.io/keepo"
            type="personal"
            images="https://img.itch.zone/aW1hZ2UvMTE2ODMxMS82ODM2NDk5LmdpZg==/original/nHETWG.gif, https://img.itch.zone/aW1hZ2UvMTE2ODMxMS82ODAzMDI0LmdpZg==/original/zjhuBY.gif, https://img.itch.zone/aW1hZ2UvMTE2ODMxMS82ODI0NjMyLmdpZg==/original/85ZX6c.gif"
            />
            <ProjectCard
            title="RMIT Engineering/IT Industry Night"
            description="Industry Night brought 300+ students face-to-face with over 30 companies to learn more about the tech/engineering industries."
            fulldescription="RMIT Engineering/IT Industry Night was a joint venture between a collection of tech-related student clubs at RMIT,bringing **300+ students face-to-face with over 30 companies** to learn more about the tech/engineering industries. Through various connections, Females in RMIT Engineering, RMIT Information Security Collective, RMIT CSIT Society, RMIT Society for Women in Information TeCHnology, and Students Association for Sustainable Systems Engineering were able to collect a range of companies including **Commbank, Deloitte, IBM and many more** in one room, with the goal of educating students on industry opportunities. The event was an overwhelming success, and **RMIT's biggest networking event**."
            image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F244589149%2F318756900791%2F1%2Foriginal.20220310-010632?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=4034342c76f0dbef8a327a6931d3b3d9"
            language="Social"
            link="https://www.eventbrite.com.au/e/industry-night-2022-tickets-269510100967"
            badgecolour="yellow"
            images="https://media-exp1.licdn.com/dms/image/C5622AQFeHOH5Q-YW-w/feedshare-shrink_1280/0/1648039003780?e=1663804800&v=beta&t=4ne_gOAI1nObwjLHi_Y1Ia5unkNhgDpPy7Rm8K03bRM"
            />
            <ProjectCard
            title="RMIT Information Security Collective Website"
            description="Total redesign of RMIT's security club's website, done as a favour on request from the executive team."
            fulldescription="Previously RISC was making use of a template, simply switching out default images. This redesign provided the club with a more interesting look, carrying a more 'hacker-y' vibe."
            image="https://i.imgur.com/JHkAnk0.png"
            language="Web Design"
            link="https://risc.melbourne"
            badgecolour="red"
            type="commission"
            images="https://i.imgur.com/bkirGNph.jpg"
            />
            <ProjectCard
            title="RMIT InfoTech"
            description="Unofficial student-run Discord server for students in STEM at RMIT, both as a social and study space."
            fulldescription="**RMIT InfoTech** is an online community of past, current and future RMIT students with a passion for technology. The space acts as both a social hub, with a range of channels for various interests, as well as a study space, with course discussion channels set up on an opt-in basis. This latter feature makes use of a custom-coded Discord bot to manage the creation/deletion/permission management of individual chat categories for individual RMIT classes. This server has ammassed **over 2000 members** since being started, making it the largest IT-related server at RMIT."
            image="https://i.imgur.com/hpoKbwa.png"
            language="Social"
            badgecolour="cyan"
            type="personal"
            />
            <ProjectCard
            title="RMIT InfoTech Discord Bot"
            description="A Discord bot written for the RMIT InfoTech server. Providing a range of utility to students and discord admins"
            image="https://libus.xyz/img/discord.png"
            language="Python"
            type="personal"
            />
            
            
        </Group>
        
      </Container>

      </>
    }
  </AppShell>
  );
}

export default App;
