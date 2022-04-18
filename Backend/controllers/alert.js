const alertModel = require('../models/postAlert');

class alert {
  async getAllAlert(req, res) {
    try {
      let Alerts = await alertModel.find({});
      if (Alerts) {
        return res.json({ Alerts });
      }
    } catch (err) {
      console.log(err);
    }
  }
  async getAlertById(req, res) {
    let { aId } = req.body;
    try {
      let alert = await alertModel.findById(aId);
      res.status(200).json({ alert });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  async postDeleteAlert(req, res) {
    let id = req.params.id;

    console.log('id to delete', id);
    if (!id) {
      return res.json({ error: 'All filled must be required' });
    } else {
      try {
        let deleteAlert = await alertModel.findByIdAndDelete(id);
        if (deleteAlert) {
          return res.json({ id });
        }
      } catch (err) {
        return res.status(500).json({ err });
      }
    }
  }

  async postEditAlert(req, res) {
    let {
      aId,
      alertName,

      Alertmessage,

      variable,
      schema,
      AlertType,
      days,
      daysMax,
      daysMin,
      hours,
      hoursMax,
      hoursMin,
      minute,
      minuteMax,
      minuteMin,
      percentage,
      percentageMax,
      percentageMin,
      operation,
      date,
      status
    } = req.body;
    console.log(
      'updated alert',
      aId,
      alertName,

      Alertmessage,

      variable,
      schema,
      AlertType,
      days,
      daysMax,
      daysMin,
      hours,
      hoursMax,
      hoursMin,
      minute,
      minuteMax,
      minuteMin,
      percentage,
      percentageMax,
      percentageMin,
      operation,
      date,
      status
    );
    if (AlertType === 'NormalAlert') {
      if (!aId) {
        return res.json({ message: 'All filled must be required' });
      } else {
        let currentAlert = alertModel.findByIdAndUpdate(aId, {
          alertName,
          Alertmessage,
          variable,
          schema,
          AlertType,
          days,
          hours,
          minute,
          percentage,
          operation,
          date,
          status
        });
        currentAlert.exec((err, result) => {
          if (err) console.log(err);
          return res.json({ result });
        });
      }
    } else {
      let currentAlert = alertModel.findByIdAndUpdate(aId, {
        alertName,
        Alertmessage,
        variable,
        schema,
        AlertType,
        daysMax,
        daysMin,
        hoursMax,
        hoursMin,
        minuteMax,
        minuteMin,
        percentageMax,
        percentageMin,
        date,
        status
      });
      currentAlert.exec((err, result) => {
        if (err) console.log(err);
        return res.json({ result });
      });
    }
  }

  async postAlert(req, res) {
    const {
      alertName,

      Alertmessage,

      variable,
      schema,
      AlertType,
      days,
      daysMax,
      daysMin,
      hours,
      hoursMax,
      hoursMin,
      minute,
      minuteMax,
      minuteMin,
      percentage,
      percentageMax,
      percentageMin,
      operation,
      date,
      status
    } = req.body;
    if (AlertType === 'NormalAlert') {
      console.log(
        alertName,

        Alertmessage,

        variable,
        schema,
        AlertType,
        days,
        hours,
        minute,
        percentage,
        operation,
        date,
        status
      );

      const newAlertModel = new alertModel({
        alertName,

        Alertmessage,

        variable,
        schema,
        AlertType,
        days,
        hours,
        minute,
        percentage,
        operation,
        date,
        status
      });

      newAlertModel.save((doc, error) => {
        if (!error) {
          console.log(doc);
          return res.status(201).json({ doc });
        }
      });
    } else {
      console.log(
        alertName,

        Alertmessage,

        variable,
        schema,
        AlertType,
        hoursMax,
        daysMin,
        daysMax,
        hoursMin,
        minuteMax,
        minuteMin,
        percentageMax,
        percentageMin,
        date,
        status
      );

      const newAlertModel = new alertModel({
        alertName,

        Alertmessage,

        variable,
        daysMin,
        schema,
        AlertType,
        hoursMax,
        daysMax,
        hoursMin,
        minuteMax,
        minuteMin,
        percentageMax,
        percentageMin,
        date,
        status
      });

      newAlertModel.save((doc, error) => {
        if (!error) {
          console.log(doc);
          return res.status(201).json({ doc });
        }
      });
    }
  }
}
const alertController = new alert();
module.exports = alertController;
