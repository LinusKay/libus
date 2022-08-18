import { Card, Text, Image, Badge, Group, Container, Modal, Button, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function ProjectCard(props) {
    const title = props.title
    const description = props.description
    const fulldescription = props.fulldescription
    const image = props.image
    const language = props.language
    const link = props.link
    const type = props.type
    let badgeColour = props.badgecolour
    let gradientFrom;
    let gradientTo;
    if (badgeColour == null) {
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
    }
    else if (badgeColour == "gradient"){
        const gradient = props.badgegradient.split(", ")
        gradientFrom = gradient[0]
        gradientTo = gradient[1]
        console.log(gradientFrom)
        console.log(gradientTo)
    }
    const images = props.images?.split(", ")

    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    return (
        <Container size={470} px={0}>
            <Card shadow="xl" p="xl" radius="xl" size={300}>
                <Card.Section>
                    <Image
                    component="a"
                    variant="link"
                    onClick={() => setOpened(true)}
                    src={image}
                    height={100}
                    style={{ cursor: 'pointer'}}
                    />
                </Card.Section>
                <Card.Section p="lg">
                    <Text color="dimmed" weight={700} variant="link" style={{ cursor: 'pointer'}} size="sm" onClick={() => setOpened(true)}>{title}</Text>
                    <Text color="dimmed" size="sm">{description}</Text>
                    <Group position="apart">
                        <Group position="left">
                            {
                                badgeColour != "gradient" ? <Badge mt="xs"  color={badgeColour}>{language}</Badge>
                                :
                                <Badge mt="xs" variant={badgeColour} gradient={{from: gradientFrom, to: gradientTo}}>{language}</Badge>
                            }
                            
                            {
                                type == null ?
                                ''
                                :
                                <Badge mt="xs" color="gray">{type}</Badge>
                            }
                        </Group>
                        {
                            badgeColour != "gradient" ? 
                            <Button radius="xl" variant="outline" color={badgeColour} onClick={() => setOpened(true)}>Learn More</Button>
                            :
                            <Button radius="xl" variant="outline" color={gradientTo} onClick={() => setOpened(true)}>Learn More</Button>
                        }
                                
                        
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
                radius="xl"
                >
                    <Image
                    src={image}
                    component="a" 
                    href={link}
                    />
                    <Group position="apart" mt="sm" mb="sm">
                        <Group position="left">
                            <Badge mt="xs" color={badgeColour}>{language}</Badge>
                            
                            {
                                type == null ?
                                ''
                                :
                                <Badge mt="xs" color="gray">{type}</Badge>
                            }
                        </Group>
                            {
                                link == null ?
                                ''
                                :
                                <Button radius="xl" variant="outline" color={badgeColour} component="a" href={link}>View Project</Button>
                            }
                        
                    </Group>
                    
                    {
                        fulldescription == null ?
                        <Text><ReactMarkdown>{description}</ReactMarkdown></Text>
                        :
                        <Text><ReactMarkdown>{fulldescription}</ReactMarkdown></Text>
                    }

                    {
                        images?.map((image, index) =>
                            <Image src={image}/>
                        )
                    }
                    
            </Modal>
        </Container>
    )
}

export default ProjectCard