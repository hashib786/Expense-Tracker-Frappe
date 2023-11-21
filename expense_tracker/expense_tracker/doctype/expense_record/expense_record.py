# Copyright (c) 2023, Hashib Raja and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ExpenseRecord(Document):
	def before_save(self) :
		# if self.type == "Credit" :
		# 	self.formatted_amount = self.amount
		# else :
		# 	self.formatted_amount = -self.amount
		self.formatted_amount = self.amount if self.type == "Credit" else (-self.amount)
