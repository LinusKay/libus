import { Image, Text, Container, Button, Group } from '@mantine/core'
function Award(props){
    const title = props.title
    const image = props.image
    const description = props.description
    const from = props.from
    const project = props.project
    const link = props.link

    return(
        <>
        <Container shadow="xl" p="lg" radius="md" size="xl">
            <Image
            src={image}
            width={100}
            caption={from}
            align="center"
            />
            <Text align="center">{title}</Text>
            <Group position="center">
            <Button align="center" mt="sm" variant="outline" color="yellow">View</Button>
            </Group>
        </Container>
        </>
    )
}

export default Award