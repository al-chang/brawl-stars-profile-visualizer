class PlayerModel {
  constructor(data) {
    this.victories = data["3vs3Victories"];
    this.battles = data.battles;
    this.roboRumbleTime = data.bestRoboRumbleTime;
    this.bigBrawlerTime = data.bestTimeAsBigBrawler;
    this.brawlers = data.brawlers;
    this.club = data.club;
    this.duoVictories = data.duoVictories;
    this.expLevel = data.expLevel;
    this.expPoints = data.expPoints;
    this.highestPowerPlayPoints = data.highestPowerPlayPoints;
    this.icon = data.icon;
    this.isQualifiedFromChampionshipChallenge =
      data.isQualifiedFromChampionshipChallenge;
    this.name = data.name;
    this.nameColor = data.nameColor;
    this.soloVictories = data.soloVictories;
    this.tag = data.tag;
    this.trophies = data.trophies;
  }

  // Determine the number of games a player has been awarded star player out of their recent games
  StarPlayerCount() {
    let gamesStarPlayer = 0;
    this.battles.forEach((game) => {
      if ("starPlayer" in game.battle) {
        if (game.battle.starPlayer.tag === this.tag) {
          gamesStarPlayer += 1;
        }
      }
    });
    return gamesStarPlayer;
  }

  // Determine the number of games the player has recently won, out of their total number of games
  NumberWins() {
    let wins = 0;
    this.battles.forEach((game) => {
      if (game.battle.result === "victory") {
        wins += 1;
      }
    });
    return wins;
  }

  // Recently played brawlers
  RecentBrawlers() {
    let brawlers = {};
    this.battles.forEach((game) => {
      let teams = [];
      if ("teams" in game.battle) {
        teams = [...game.battle.teams[0], ...game.battle.teams[1]];
      } else {
        teams = game.battle.players;
      }
      teams.forEach((player) => {
        if (player.tag === this.tag) {
          const playerBrawler = player.brawler.name;
          if (playerBrawler in brawlers) {
            brawlers[playerBrawler] += 1;
          } else {
            brawlers[playerBrawler] = 1;
          }
          return;
        }
      });
    });
    return brawlers;
  }
}

export default PlayerModel;
