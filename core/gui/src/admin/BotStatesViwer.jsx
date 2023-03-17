import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';


const BotStatesViewer = (props) => {

    const { botStates } = props;

    return (
        <>
        <Grid2 container >
        { Object.keys(botStates).map( id => (
           <Grid2 xs={4} >
                <h5>{ botStates[id].id }</h5>
                <h6>{ botStates[id].curPos.x }, { botStates[id].curPos.y }</h6>
                <p>Current path</p>
                <Box
                    sx={{display:'flex',flexDirection:'column'}}
                >
                    { botStates[id].path.map( coord => (
                        <span> { coord.x } , { coord.y } </span>
                    ) ) }
                </Box>

                <p>Current tasks</p>
                <Box
                    sx={{display:'flex',flexDirection:'column'}}
                >
                    { botStates[id].tasks.map( task => (
                        <div> 
                            <span> {JSON.stringify(task.initPos)} --- {JSON.stringify(task.endPos)} </span>    
                        </div>
                    ) ) }
                </Box>
            </Grid2>
        ) ) }
        </Grid2>
        </>
    )
}

export default BotStatesViewer;