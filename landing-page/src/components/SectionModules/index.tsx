import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import * as S from './styles'
import { ModulesProps } from 'types/api'

const SectionModules = ({ title, module }: ModulesProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {module.map(({ title, description, text }, index) => (
        <CardModule key={index} title={title} subTitle={description}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
