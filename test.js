const {sportApi, sportData} = require('./index');

const betfair = new sportApi('betfair', { getCommonContents: true });
const bet365 = new sportApi('bet365', { getCommonContents: true });

//sport.bettingHouse()

// sport.allDefinitions('frame_data_id').then((all) => {
//     console.log(all)
// })

// sport.modalData('1', 'categories').then((sport) => {
//     console.log(sport)
// })

// sport.localData(1, 18, 'all').then((local) => {
//     console.log(local)
// })

// sport.liague(66775).then((ligue) => {
//     console.log(ligue)
// })

// sport.liagueSummary(66775).then((sumary) => {
//     console.log(sumary)
// })

// sport.seasonGoals(66775).then((goals) => {
//     console.log(goals)
// })

sport.getInfo('Europe:Berlin', 'stats_season_meta', 76415).then((data) => {
    console.log(data)
})
{
  event: 'stats_season_meta',
  _dob: 1593747415,
  _maxage: 3600,
  data: {
    season: {
      _id: '76415',
      _doc: 'season',
      _utid: 325,
      _sid: 1,
      name: 'Brasileiro Serie A 2020',
      abbr: 'BSA 2020',
      start: [Object],
      end: [Object],
      neutralground: false,
      friendly: false,
      currentseasonid: 76415,
      year: '2020',
      coverage: [Object],
      h2hdefault: [Object]
    },
    sport: { _doc: 'sport', _id: 1, _sid: 1, name: 'Soccer' },
    realcategory: {
      _doc: 'realcategory',
      _id: 13,
      _sid: 1,
      _rcid: 13,
      name: 'Brazil',
      cc: [Object]
    },
    tournamentids: [ 83 ],
    tableids: [ 50119 ],
    cupids: [],
    uniquetournament: {
      _doc: 'uniquetournament',
      _id: 325,
      _utid: 325,
      _sid: 1,
      _rcid: 13,
      name: 'Brasileiro Serie A',
      currentseason: 76415,
      friendly: false
    },
    statscoverage: {
      complexstat: true,
      livetable: true,
      halftimetable: true,
      overunder: true,
      overunderhalftime: true,
      fixtures: true,
      leaguetable: true,
      tablerules: true,
      headtohead: true,
      formtable: true,
      secondhalftables: true,
      divisionview: true,
      matchdetails: true,
      lineups: true,
      formations: true,
      topgoals: true,
      topassists: true,
      disciplinary: true,
      redcards: true,
      yellowcards: true,
      goalminute: true,
      goalminscorer: true,
      substitutions: true,
      squadservice: true,
      livescoreeventthrowin: true,
      livescoreeventgoalkick: true,
      livescoreeventfreekick: true,
      livescoreeventshotsoffgoal: true,
      livescoreeventshotsongoal: true,
      livescoreeventgoalkeepersave: true,
      livescoreeventcornerkick: true,
      livescoreeventoffside: true,
      livescoreeventfouls: true,
      livescoreeventpossesion: true,
      referee: true,
      stadium: true,
      staffmanagers: true,
      staffteamofficials: false,
      staffassistantcoaches: false,
      jerseys: true
    }
  }
}
