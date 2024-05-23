exports.verifyAdmin = (req, res, next) => {
    const {
        userId,
        role
    } = req.data;
    try {
        if (role !== 'admin') {
            return res.status(401).json({
                message: "You are not allowed to do this operation."
            })
        }

        next()
    } catch (error) {
        console.error("Error in verifyAdmin middleware", error);
        return res.status(500).json({ message: "Internal Server Error", error:error.message });
    }
}