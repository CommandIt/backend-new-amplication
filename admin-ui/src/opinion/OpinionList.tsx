import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SOLIDER_TITLE_FIELD } from "../solider/SoliderTitle";

export const OpinionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Opinions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Energy" source="energy" />
        <TextField label="ID" source="id" />
        <TextField label="Positivity" source="positivity" />
        <TextField label="Productivity" source="productivity" />
        <ReferenceField label="Solider" source="solider.id" reference="Solider">
          <TextField source={SOLIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
