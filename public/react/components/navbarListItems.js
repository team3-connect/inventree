import InventoryIcon from '@mui/icons-material/Inventory';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BuildIcon from '@mui/icons-material/Build';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <InventoryIcon />,
        label: 'Dashboard',
        route: '/',
    },
    {
        id: 1,
        icon: <AddCircleOutlineIcon />,
        label: 'Create Funkopop',
        route: '#',
    },
    {
        id: 2,
        icon: <BuildIcon />,
        label: 'Do Nothing Button',
        route: '#',
    },
]