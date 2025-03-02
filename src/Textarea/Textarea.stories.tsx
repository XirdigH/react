import React from 'react'
import {Meta} from '@storybook/react'
import {Box, FormControl, Textarea, TextareaProps} from '..'
import {DEFAULT_TEXTAREA_COLS, DEFAULT_TEXTAREA_RESIZE, DEFAULT_TEXTAREA_ROWS} from '../Textarea'
import {
  FormControlArgs,
  formControlArgTypes,
  formControlArgs,
  getFormControlArgsByChildComponent,
} from '../utils/story-helpers'

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta

export const Playground = (args: FormControlArgs<TextareaProps>) => {
  const {parentArgs, labelArgs, captionArgs, validationArgs} = getFormControlArgsByChildComponent(args)
  return (
    <Box as="form">
      <FormControl {...parentArgs}>
        <FormControl.Label {...labelArgs} />
        <Textarea {...args} />
        {captionArgs.children && <FormControl.Caption {...captionArgs} />}
        {validationArgs.children && validationArgs.variant && (
          <FormControl.Validation {...validationArgs} variant={validationArgs.variant} />
        )}
      </FormControl>
    </Box>
  )
}
Playground.args = {
  ...formControlArgs,
  block: false,
  cols: DEFAULT_TEXTAREA_COLS,
  disabled: false,
  resize: DEFAULT_TEXTAREA_RESIZE,
  rows: DEFAULT_TEXTAREA_ROWS,
  validationStatus: undefined,
}
Playground.argTypes = {
  block: {
    control: {type: 'boolean'},
  },
  cols: {
    control: {type: 'number'},
  },
  disabled: {
    control: {type: 'boolean'},
  },
  resize: {
    options: ['none', 'both', 'horizontal', 'vertical'],
    control: {type: 'radio'},
  },
  rows: {
    control: {type: 'number'},
  },
  sx: {
    table: {
      disable: true,
    },
  },
  validationStatus: {
    options: ['error', 'success', 'warning'],
    control: {type: 'radio'},
  },
  ...formControlArgTypes,
}

export const Default = () => (
  <Box as="form">
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <Textarea />
    </FormControl>
  </Box>
)
