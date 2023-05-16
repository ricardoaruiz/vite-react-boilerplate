import { render, screen } from '@/utils/test-utils'

import { Title } from '.'

describe('Title', () => {
  it('should be show title', () => {
    render(<Title />)
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument()
  })
})
