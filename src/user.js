const userList = [[
    1,'Barathi','12th','Bio-maths'
],[2,'surya','12th','maths']]

const createUser = (userId, userName, grade, specialization) => {
    this.userId = userId;
    this.userName = userName;
    this.grade = grade;
    this.specialization = specialization;
    const existingUser = userList.find((user) => { user.userId === userId });
    if (!existingUser) {
        const newUser = [userId, userName, grade, specialization]
        userList.push(newUser);
    }
};

const updateUser = (userId, userName, grade, specialization) => {
    const updatedUser = userList.find((user) =>  user[0] === userId );
    if (updatedUser !== undefined) {
        updatedUser[1] = userName;
        updatedUser[2] = grade;
        updatedUser[3] = specialization
    }
    // userList.push(updatedUser)
}

const getAllUser =()=>{
    return userList;
}

const deleteUSer =(userId)=>{
    const deletedUser = userList.find((user)=>{user.userId === userId})
    userList.pop(deleteUSer);
    console.log(`user ${userId} deleted successfully`)
}


// console.log(getAllUser());

// deleteUSer(3);
createUser(3,'dhiya','kg','general')
updateUser(3,'dhiya','ukg','general')
    console.log(userList);