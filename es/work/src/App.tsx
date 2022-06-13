import { useForm } from '@mantine/form'

function App() {
    const form = useForm({
        initialValues: { account: '' },
    })

    console.log('form', form.getInputProps('account'))

    return <div />
}

export default App
