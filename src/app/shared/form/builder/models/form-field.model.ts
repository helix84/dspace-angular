import { autoserialize } from 'cerialize';
import { FormRowModel } from '../../../../core/shared/config/config-submission-forms.model';

export class FormFieldModel {

  @autoserialize
  hints: string;

  @autoserialize
  label: string;

  @autoserialize
  mandatoryMessage: string;

  @autoserialize
  mandatory: string;

  @autoserialize
  repeatable: boolean;

  @autoserialize
  input: {
    type: string;
  };

  @autoserialize
  selectableMetadata: Array<{
    metadata: string;
    label?: string;
    authority?: string;
    [name: string]: any;
  }>;

  @autoserialize
  rows: FormRowModel[];

  @autoserialize
  value: any;
}
