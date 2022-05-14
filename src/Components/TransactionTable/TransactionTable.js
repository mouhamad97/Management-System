import * as React from 'react';
import {db} from './../../FireBaseConfig'
import { collection,deleteDoc,doc,getDocs, setDoc} from "firebase/firestore"
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

export default function TransactionTable() {
    const [transactions , setClients] = useState([]);
    const transactionsCollectionRef = collection(db,"transactions");
    
    
    useEffect(()=>{
        const getClients =  async () =>{
            const data =  await getDocs(transactionsCollectionRef);
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
    deleteDoc(doc(db,'transactions',id));
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
    await setDoc(doc(db,'transactions',newRow.id),newRow);
    return { ...newRow, isNew: false };
  };

  const columns = [
    { field: 'full name', headerName: 'fullname', width: 100  },
    { field: 'type', headerName: 'type',  editable: true,width: 100},
    { field: 'paymentMethod', headerName: 'payment Method',  editable: true ,width: 100},
    { field: 'percentage', headerName: 'percentage',  editable: true,width: 100},
    { field: 'warrantyEnd ', headerName: 'warranty End' ,editable: true ,width: 100},
    { field: 'WarrantyStart', headerName: 'warranty Start',  editable: true ,width: 100},
    { field: 'numberOfPlates', headerName: 'numberOfPlates',width: 100,editable: true},
    { field: 'specialConditions', headerName: 'specialConditions',width: 100,editable: true},
    { field: 'team', headerName: 'team',width: 100,editable: true},
    { field: 'battery', headerName: 'battery',width: 100, editable: true},
    { field: 'material',headerName: 'material',width: 100, editable: true},
    { field: 'inferterType',headerName: 'inferterType',width: 100,editable: true},
    { field: 'powerSupply',headerName: 'power Supply',width: 100,editable: true},
    { field: 'productsSource',headerName: 'products Source',width: 100,editable: true},
    { field: 'Camera',headerName: 'Camera',width: 100,editable: true},
    { field: 'Hard',headerName: 'Hard',width: 100,editable: true},

 

    
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
        rows={transactions}
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
