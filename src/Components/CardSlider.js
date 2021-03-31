    import React from 'react';
    import Slider from 'react-slick';
    import {Card, CardContent, CardHeader} from '@material-ui/core'
    import { makeStyles } from "@material-ui/core/styles";

    export default function CardSlider() {
        const settings={
            dots:true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll:1
        };
        const useStyles = makeStyles((theme)=>({
            CardStyle:{
                width:"282px",
                height: "166px",
                background: "#594E68",
                borderRadius:"10px",
                marginLeft: "auto",
                marginRight: "auto"
            },
            SliderStyle:{
                width: "282px",
                height: "166px",
                marginLeft: "auto",
                marginRight: "auto",
            }
        }));
        const classes=useStyles()

      return (
        <div>
          <Slider className={classes.SliderStyle} {...settings}>
            <div><Card className={classes.CardStyle}><CardHeader title="NIC"/></Card></div>
            <div><Card className={classes.CardStyle}><CardHeader title="Esewa"/></Card></div>
            <div><Card className={classes.CardStyle}><CardHeader title="Khalti"/></Card></div>
          </Slider>
        </div>
        )
        }
    