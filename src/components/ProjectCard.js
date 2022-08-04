import { Card, Text, Image, Badge, Group, Container, Modal, Button, useMantineTheme, Grid } from '@mantine/core'
import { useState } from 'react'

function ProjectCard(props) {
    const title = props.title
    const description = props.description
    const fulldescription = props.fulldescription
    const image = props.image
    const language = props.language
    const link = props.link
    let type = props.type
    let badgeColour;
    switch(language){
        case "Python":
            badgeColour = "blue"; break
        case "GMS2":
            badgeColour = "green"; break
        case "Java":
            badgeColour = "orange"; break
        default:
            badgeColour = "gray"; break
    }

    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    return (
        <Container size={470} px={0}>
            <Card shadow="xl" p="lg" radius="md" size={300}>
                <Card.Section>
                    <Image
                    component="a"
                    variant="link"
                    onClick={() => setOpened(true)}
                    src={image}
                    height={100}
                    />
                </Card.Section>
                <Card.Section p="md">
                    <Text weight={700} variant="link"  size="sm">{title}</Text>
                    <Text color="dimmed" size="sm">{description}</Text>
                    <Group position="apart">
                        <Group position="left">
                            <Badge mt="xs" variant="outline" color={badgeColour}>{language}</Badge>
                            <Badge mt="xs" variant="outline" color="gray">{type}</Badge>
                        </Group>
                        <Button variant="outline" color={badgeColour} onClick={() => setOpened(true)}>Learn More</Button>
                    </Group>
                </Card.Section>
            </Card>
            <Modal
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                centered
                opened={opened}
                onClose={() => setOpened(false)}
                title={title}
                size="xl"
                >
                    <Image
                    src={image}
                    />
                    <Group position="apart" mt="sm" mb="sm">
                        <Group position="left">
                            <Badge mt="xs" color={badgeColour}>{language}</Badge>
                            <Badge mt="xs" color="gray">{type}</Badge>
                        </Group>
                    </Group>
                    {
                        fulldescription == null ?
                        <Text>{description}</Text>
                        :
                        <Text>{fulldescription}</Text>
                    }
                    
            </Modal>
        </Container>
    )
}

export default ProjectCard