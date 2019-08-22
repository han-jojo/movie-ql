const comsenpai = {
    name: "jiho",
    age: "25",
    sex: "male"
};

const resolvers = {
    Query: {
        person: () => comsenpai
    }
};

export default resolvers;