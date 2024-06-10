import CreateIcon from '@mui/icons-material/Create';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { blue } from '@mui/material/colors';
const ComposeButton=styled(Button)<ButtonProps>(({size}:{size: string})=>({
  backgroundColor:blue[200],
  marginTop:'15px',
  color:'#fff',
  textTransform:'capitalize',
  display:'flex',
  width:'90%',
  height:50,
  maxWidth:'fit-content',
  justifyContent:'center',
  gap:2,
  alignItems:'center',
  marginLeft:size!== "small" ? 1 : '0',
}))
function Compose({ size }: { size: string }) {
  return (
    <ComposeButton size={size}>
      <CreateIcon />
      {size !== "small" ? "Compose" : ""}
    </ComposeButton>
  );
}

export default Compose;