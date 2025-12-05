export const evmLocations = {
  // Location 1: Alappuzha
  1: {
    locationName: "Alappuzha",
    locationCode: "ALAPPUZHA_G04073",
    Ward: {
      level: "Ward",
      title: "Vote For രാഹുൽ",
      candidates: [
        { id: 1, name: "", symbol: "" },
        { id: 2, name: "രാഹുൽ", symbol: "🖐️" },
        { id: 3, name: "", symbol: "" },
        { id: 4, name: "", symbol: "" },
        { id: 5, name: "", symbol: "" },
        { id: 6, name: "", symbol: "" },
        { id: 7, name: "", symbol: "" },
        { id: 8, name: "", symbol: "" },
        { id: 9, name: "", symbol: "" },
        { id: 10, name: "", symbol: "" }
      ]
    },
    Block: {
      level: "Block",
      title: "Vote For ഷോജി",
      candidates: [
        { id: 1, name: "ഷോജി", symbol: "🗳️" },
        { id: 2, name: "", symbol: "" },
        { id: 3, name: "", symbol: "" },
        { id: 4, name: "", symbol: "" },
        { id: 5, name: "", symbol: "" },
        { id: 6, name: "", symbol: "" },
        { id: 7, name: "", symbol: "" },
        { id: 8, name: "", symbol: "" },
        { id: 9, name: "", symbol: "" },
        { id: 10, name: "", symbol: "" }
      ]
    },
    District: {
      level: "District",
      title: "Vote For സുനിൽ",
      candidates: [
        { id: 1, name: "", symbol: "" },
        { id: 2, name: "", symbol: "" },
        { id: 3, name: "സുനിൽ", symbol: "⚡" },
        { id: 4, name: "", symbol: "" },
        { id: 5, name: "", symbol: "" },
        { id: 6, name: "", symbol: "" },
        { id: 7, name: "", symbol: "" },
        { id: 8, name: "", symbol: "" },
        { id: 9, name: "", symbol: "" },
        { id: 10, name: "", symbol: "" }
      ]
    }
  },

  // Location 2: Kollam
  2: {
    locationName: "Kollam",
    locationCode: "KOLLAM_G05021",
    Ward: {
      level: "Ward",
      title: "Vote For അനിൽ",
      candidates: [
        { id: 1, name: "അനിൽ", symbol: "🌟" },
        { id: 2, name: "", symbol: "" },
        { id: 3, name: "", symbol: "" },
        { id: 4, name: "", symbol: "" },
        { id: 5, name: "", symbol: "" },
        { id: 6, name: "", symbol: "" },
        { id: 7, name: "", symbol: "" },
        { id: 8, name: "", symbol: "" },
        { id: 9, name: "", symbol: "" },
        { id: 10, name: "", symbol: "" }
      ]
    },
    Block: {
      level: "Block",
      title: "Vote For രവി",
      candidates: [
        { id: 1, name: "", symbol: "" },
        { id: 2, name: "", symbol: "" },
        { id: 3, name: "", symbol: "" },
        { id: 4, name: "രവി", symbol: "🏆" },
        { id: 5, name: "", symbol: "" },
        { id: 6, name: "", symbol: "" },
        { id: 7, name: "", symbol: "" },
        { id: 8, name: "", symbol: "" },
        { id: 9, name: "", symbol: "" },
        { id: 10, name: "", symbol: "" }
      ]
    },
    District: {
      level: "District",
      title: "Vote For മീര",
      candidates: [
        { id: 1, name: "", symbol: "" },
        { id: 2, name: "", symbol: "" },
        { id: 3, name: "", symbol: "" },
        { id: 4, name: "", symbol: "" },
        { id: 5, name: "മീര", symbol: "🌺" },
        { id: 6, name: "", symbol: "" },
        { id: 7, name: "", symbol: "" },
        { id: 8, name: "", symbol: "" },
        { id: 9, name: "", symbol: "" },
        { id: 10, name: "", symbol: "" }
      ]
    }
  },

  // Location 3: Kochi
  3: {
    locationName: "Kochi",
    locationCode: "KOCHI_D02045",
    Ward: {
      level: "Ward",
      title: "Vote For പ്രിയ",
      candidates: [
        { id: 1, name: "", symbol: "" },
        { id: 2, name: "", symbol: "" },
        { id: 3, name: "", symbol: "" },
        { id: 4, name: "", symbol: "" },
        { id: 5, name: "", symbol: "" },
        { id: 6, name: "പ്രിയ", symbol: "🦋" },
        { id: 7, name: "", symbol: "" },
        { id: 8, name: "", symbol: "" },
        { id: 9, name: "", symbol: "" },
        { id: 10, name: "", symbol: "" }
      ]
    },
    Block: {
      level: "Block",
      title: "Vote For അജയ്",
      candidates: [
        { id: 1, name: "", symbol: "" },
        { id: 2, name: "", symbol: "" },
        { id: 3, name: "", symbol: "" },
        { id: 4, name: "", symbol: "" },
        { id: 5, name: "", symbol: "" },
        { id: 6, name: "", symbol: "" },
        { id: 7, name: "അജയ്", symbol: "🔥" },
        { id: 8, name: "", symbol: "" },
        { id: 9, name: "", symbol: "" },
        { id: 10, name: "", symbol: "" }
      ]
    },
    District: {
      level: "District",
      title: "Vote For സിന്ധു",
      candidates: [
        { id: 1, name: "", symbol: "" },
        { id: 2, name: "", symbol: "" },
        { id: 3, name: "", symbol: "" },
        { id: 4, name: "", symbol: "" },
        { id: 5, name: "", symbol: "" },
        { id: 6, name: "", symbol: "" },
        { id: 7, name: "", symbol: "" },
        { id: 8, name: "സിന്ധു", symbol: "💎" },
        { id: 9, name: "", symbol: "" },
        { id: 10, name: "", symbol: "" }
      ]
    }
  }
};

export const getLocationData = (locationId) => evmLocations[locationId] || null;

export const getLevelTheme = (level) => {
  const themes = {
    Ward: {
      tabColor: '#9CA3AF',
      containerColor: '#F3F4F6',
      borderColor: '#D1D5DB'
    },
    Block: {
      tabColor: '#EC4899',
      containerColor: '#FCE7F3',
      borderColor: '#F9A8D4'
    },
    District: {
      tabColor: '#0891B2',
      containerColor: '#E0F2FE',
      borderColor: '#7DD3FC'
    }
  };
  return themes[level] || themes.Ward;
};
