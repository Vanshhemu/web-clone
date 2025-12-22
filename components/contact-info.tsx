export default function ContactInfo() {
  return (
    <div className="space-y-12">
      {/* Map Section */}
      <div className="rounded-lg overflow-hidden shadow-lg h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4746870891673!2d77.18397007549893!3d28.651920775686547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b0000001%3A0x1234567890abcdef!2sPlot%20No%2033%2C%20Block%20P%2C%20Karol%20Bagh!5e0!3m2!1sen!2sin!4v1734518400000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Address Details */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-3">Corporate Address:</h3>
          <p className="text-gray-700">
            <strong>New Delhi:</strong> Plot No 33, Block P, Building No. 3275, Ground Floor, Beadon Pura, Gali Number 27, Karol Bagh, New Delhi, Central Delhi, Delhi - 110005
          </p>
        </div>

        <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-primary">
          <h3 className="text-xl font-bold mb-3">REACH OUT NOW!</h3>
          <p className="text-brand-primary font-bold text-lg mb-4">+91 7503737616</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> info@enstoppesolutions.com</p>
        </div>
      </div>
    </div>
  )
}