// Simulated user database
let registeredUsers = [];

// Register controller
exports.register = (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    // Simulate registration by adding the username to the list of registered users
    registeredUsers.push(username);
    res.json({ message: 'User registered successfully' });
};

// Login controller
exports.login = (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    // Check if the username is registered
    const loggedIn = registeredUsers.includes(username);
    res.json({ loggedIn });
};
