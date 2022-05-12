import * as React from 'react';
import {db} from './../../FireBaseConfig'
import {addDoc, collection,deleteDoc,doc,getDocs, setDoc} from "firebase/firestore"
import {useState , useEffect} from "react"
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  useGridApiRef,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
  randomId,
} from '@mui/x-data-grid-generator';



function EditToolbar(props) {
  const { apiRef } = props;

  const handleClick = () => {
    const id = randomId();
    apiRef.current.updateRows([{ id, isNew: true }]);
    apiRef.current.startRowEditMode({ id });

    // Wait for the grid to render with the new row
    setTimeout(() => {
      apiRef.current.scrollToIndexes({
        rowIndex: apiRef.current.getRowsCount() - 1,
      });

      apiRef.current.setCellFocus(id, 'name');
    });

  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  apiRef: PropTypes.shape({
    current: PropTypes.object.isRequired,
  }).isRequired,
};

export default function ClientTable() {
    const [clients , setClients] = useState([]);
    const clientsCollectionRef = collection(db,"clients");
    
    
    useEffect(()=>{
        const getClients =  async () =>{
            const data =  await getDocs(clientsCollectionRef);
            setClients(data.docs.map((doc)=> ({...doc.data(),id:doc.id})));
        
        }
    
        getClients();
    },[])







  const apiRef = useGridApiRef();

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.startRowEditMode({ id });
  };

  const handleSaveClick = (id) => async (event) => {

    event.stopPropagation();
    await apiRef.current.stopRowEditMode({ id });
  };

  const handleDeleteClick = (id) => (event) => {
    deleteDoc(doc(db,'clients',id));
    event.stopPropagation();
    apiRef.current.updateRows([{ id, _action: 'delete' }]);
  };

  const handleCancelClick = (id) => async (event) => {
    event.stopPropagation();
    await apiRef.current.stopRowEditMode({ id, ignoreModifications: true });

    const row = apiRef.current.getRow(id);
    if (row.isNew) {
      apiRef.current.updateRows([{ id, _action: 'delete' }]);
    }
  };

  const processRowUpdate = async (newRow) => {
      console.log(newRow);
    await setDoc(doc(db,'clients',newRow.id),newRow);
    return { ...newRow, isNew: false };
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'lastName', headerName: 'Last Name', editable: true },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 180,
      editable: true,
    },
    {
      field: 'region',
      headerName: 'Region',
      width: 220,
      editable: true,
    },    {
        field: 'area',
        headerName: 'Area',
        width: 220,
        editable: true,
        type: 'singleSelect',
        valueOptions: ['United Kingdom', 'Spain', 'Brazil','United Kingdom', 'Spain', 'Brazil','United Kingdom', 'Spain', 'Brazil','United Kingdom', 'Spain', 'Brazil','United Kingdom', 'Spain', 'Brazil','United Kingdom', 'Spain', 'Brazil']
      },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = apiRef.current.getRowMode(id) === 'edit';

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGridPro
        rows={clients}
        columns={columns}
        apiRef={apiRef}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { apiRef },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
