var MatchModel = require('../models/MatchModel.js');

/**
 * MatchController.js
 *
 * @description :: Server-side logic for managing Matchs.
 */
module.exports = {

    /**
     * MatchController.list()
     */
    list: function (req, res) {
        MatchModel.find(function (err, Matchs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Match.',
                    error: err
                });
            }
            return res.json(Matchs);
        });
    },

    /**
     * MatchController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        MatchModel.findOne({_id: id}, function (err, Match) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Match.',
                    error: err
                });
            }
            if (!Match) {
                return res.status(404).json({
                    message: 'No such Match'
                });
            }
            return res.json(Match);
        });
    },

    /**
     * MatchController.create()
     */
    create: function (req, res) {
        var Match = new MatchModel({
        });

        Match.save(function (err, Match) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Match',
                    error: err
                });
            }
            return res.status(201).json(Match);
        });
    },

    /**
     * MatchController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        MatchModel.findOne({_id: id}, function (err, Match) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Match',
                    error: err
                });
            }
            if (!Match) {
                return res.status(404).json({
                    message: 'No such Match'
                });
            }

            Match.player1 = req.body.player1 ? req.body.player1 : Match.player1;
            Match.save(function (err, Match) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Match.',
                        error: err
                    });
                }

                return res.json(Match);
            });
        });
    },

    /**
     * MatchController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        MatchModel.findByIdAndRemove(id, function (err, Match) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Match.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};