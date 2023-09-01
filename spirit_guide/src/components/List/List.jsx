import React, {useState} from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';


const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('Non-denominational'); // This is a hook. Second element is function  that write to first element
    const [rating, setRating] = useState(''); 
    const places = [
        {name: 'Church 1'},
        {name: 'Church 2'},
        {name: 'Church 3'},
        {name: 'Church 4'},
        {name: 'Church 5'},
        {name: 'Church 6'}

    ];
    return (
        <div className={classes.container}>
            <Typography variant="h4" >Nearby Churches</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="Baptist">Baptist</MenuItem>
                    <MenuItem value="Non-denominational">Non-denominational</MenuItem>
                    <MenuItem value="Methodism">Methodism</MenuItem>
                    <MenuItem value="Lutheranism">Lutheranism</MenuItem>
                    <MenuItem value="Pentecostalism">Pentecostalism</MenuItem>
                    <MenuItem value="Presbyterianism">Presbyterianism</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>

            <Grid conainer spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>

                    </Grid>
                ))}

            </Grid>

        </div>
    );
}

export default List;