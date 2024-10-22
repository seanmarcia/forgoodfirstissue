import Head from "next/head";
import React, { useState } from "react";

import { TeamRequestList } from "../components/TeamRequestList";

import { useAppData } from "../hooks/useAppData";

import { HeroContainer } from "../components/HeroContainer";
import { HappyContainer } from "../components/HappyContainer";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import {Grid, Heading, Stack} from '@primer/react-brand';


export default function TeamRequests() {
  const { teamRequests } = useAppData();
  const [filter, setFilter] = useState("");


  const sortedTeamRequests = teamRequests.sort((a, b) => {
    if (a.issues > b.issues) {
      return -1; // a comes first
    } else if (a.issues < b.issues) {
      return 1; // b comes first
    } else {
      return 0; // a and b are equal
    }
  });


  return (
    <>
      <Head>
        <title>For Good First Issue | Team Requests</title>
      </Head>

      <Header />

      <HeroContainer customText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <div className="section-vertical">
        <div className="grid-wrap grid-wrap--first">
          <Grid>
            <Grid.Column span={{xsmall: 12, small: 12, medium: 12, large: 5, xlarge: 3}}>
              <Stack className="stack">
                <Heading size="6">Find a team request</Heading>
                <HappyContainer filter={filter} setFilter={setFilter} />
              </Stack>
            </Grid.Column>
          </Grid>
        </div>

        <TeamRequestList teamRequests={sortedTeamRequests} filter={filter} />

      </div>

      <Footer />
    </>
  );
}
