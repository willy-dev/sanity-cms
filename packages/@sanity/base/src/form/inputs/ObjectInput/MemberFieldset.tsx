/* eslint-disable react/jsx-handler-names */

import React, {useCallback} from 'react'
import {RenderFieldCallback, RenderInputCallback, RenderItemCallback} from '../../types'
import {FieldSetMember} from '../../store/types/members'
import {FormFieldSet} from '../../components/formField/FormFieldSet'
import {MemberField} from './MemberField'

export function MemberFieldset(props: {
  member: FieldSetMember
  renderField: RenderFieldCallback
  renderInput: RenderInputCallback
  renderItem: RenderItemCallback
  onSetFieldSetCollapsed: (fieldsetName: string, collapsed: boolean) => void
}) {
  const {member, renderField, renderInput, renderItem, onSetFieldSetCollapsed} = props

  const handleSetCollapsed = useCallback(
    (collapsed: boolean) => {
      onSetFieldSetCollapsed(member.fieldSet.name, collapsed)
    },
    [member.fieldSet.name, onSetFieldSetCollapsed]
  )

  return (
    <FormFieldSet
      title={member.fieldSet.title}
      description={member.fieldSet.description}
      level={member.fieldSet.level}
      collapsible={member.fieldSet.collapsible}
      collapsed={member.fieldSet.collapsed}
      onSetCollapsed={handleSetCollapsed}
    >
      {member.fieldSet.fields.map((fieldsetMember) => (
        <MemberField
          member={fieldsetMember}
          renderField={renderField}
          renderInput={renderInput}
          renderItem={renderItem}
          key={fieldsetMember.key}
        />
      ))}
    </FormFieldSet>
  )
}