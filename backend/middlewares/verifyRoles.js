exports.verifyAdmin = (req, res, next) => {
    const {
        userId,
        isAdmin
    } = req.data;
    try {
        if (!isAdmin) {
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