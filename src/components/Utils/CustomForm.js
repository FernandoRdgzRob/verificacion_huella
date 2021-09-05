import React from 'react'
// Material UI
import { Button, Grid, TextField } from '@material-ui/core'
// React Hook Form
import { useForm } from 'react-hook-form'

const useCustomForm = () => {
  const {
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
    register
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })

  return {
    formFunctions: { clearErrors, errors, register, watch },
    handleSubmit
  }
}

const CustomForm = (props) => {
  const {
    form: { fields, submitButton },
    formFunctions: { clearErrors, errors, register, watch },
    onSubmit
  } = props

  React.useEffect(() => {
    const subscription = watch(({ name }) => clearErrors(name))
    return () => subscription.unsubscribe()
  }, [clearErrors, watch])

  return (
    <form noValidate onSubmit={onSubmit}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={4}
      >
        {fields.map((field, key) =>
          <Grid key={key} item xs={12}>
            <TextField
              fullWidth
              placeholder={field.placeholder}
              type={field.type}
              label={field.label}
              error={errors[field.name]?.type}
              helperText={errors[field.name]?.type ? errors[field.name]?.message : ''}
              {...register(field.name, { required: field.required, pattern: field.pattern })}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            style={{ marginTop: 10 }}
            fullWidth
            color='primary'
            type='submit'
            variant='contained'
          >
            {submitButton || 'Agregar'}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export { CustomForm, useCustomForm }
