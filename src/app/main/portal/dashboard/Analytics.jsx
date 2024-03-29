import React, { Component, Fragment } from "react";
import { Grid, Card } from "@material-ui/core";

import DoughnutChart from "../charts/echarts/Doughnut";

import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import StatCards from "./shared/StatCards";
import TableCard from "./shared/TableCard";
import RowCards from "./shared/RowCards";
import StatCards2 from "./shared/StatCards2";
import UpgradeCard from "./shared/UpgradeCard";
import Campaigns from "./shared/Campaigns";
import { withStyles } from "@material-ui/styles";

class Dashboard1 extends Component {
  state = {};

  render() {
    let { theme } = this.props;

    return (
      <Fragment>
        <div className="pb-24 pt-7 px-8">
        <span class="material-icons">campaign</span>
          <div className=" material-icons card-title capitalize text-balc mb-4 text-black-secondary">
          <h2>សេចក្តីប្រកាស</h2>
          </div>
         
        </div>

        <div className="analytics m-sm-30 mt--18">
          <Grid container spacing={3}>
            <Grid item lg={5} md={8} sm={12} xs={12}>
              <RowCards />
            </Grid>
            
            <Grid item lg={7} md={4} sm={12} xs={12}>
              {/* <Card className="px-6 py-4 mb-6">
                <div className="card-title">Traffic Sources</div>
                <div className="card-subtitle">Last 30 days</div>
                <DoughnutChart
                  height="300px"
                  color={[
                    theme.palette.primary.dark,
                    theme.palette.primary.main,
                    theme.palette.primary.light
                  ]}
                />
              </Card> */}
              <div className="pb-24 pt-7 px-8 bg-primary">
                <div className="card-title capitalize text-white mb-4 text-white-secondary">
                  Last 12 months sales
                </div>
                <ModifiedAreaChart
                  height="280px"
                  option={{
                    series: [
                      {
                        data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33, 40],
                        type: "line"
                      }
                    ],
                    xAxis: {
                      data: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                      ]
                    }
                  }}
                ></ModifiedAreaChart>
            </div>
            <br />
            <Card className="px-6 py-4 mb-6 p-sm-24 ">
                <div className="card-title">Traffic Sources</div>
                <div className="card-subtitle">Last 30 days</div>
                <DoughnutChart
                  height="300px"
                  color={[
                    theme.palette.primary.dark,
                    theme.palette.primary.main,
                    theme.palette.primary.light
                  ]}
                />
              </Card>  

               <Campaigns />
               


            </Grid>
          </Grid>
        </div>
     
      </Fragment>
    );
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
