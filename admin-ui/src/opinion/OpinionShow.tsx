import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SOLDIER_TITLE_FIELD } from "../soldier/SoldierTitle";

export const OpinionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Energy" source="energy" />
        <TextField label="ID" source="id" />
        <TextField label="Positivity" source="positivity" />
        <TextField label="Productivity" source="productivity" />
        <ReferenceField label="Soldier" source="soldier.id" reference="Soldier">
          <TextField source={SOLDIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
