import { StoryFn } from '@storybook/addons'
import GlobalStyles  from '../src/styles/global'

const withGlobalSytles = (storyFn: StoryFn ) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default withGlobalSytles
