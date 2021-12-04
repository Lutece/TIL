package lutece.app.part2.chapter01

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main) //R = Resource를 의미한다. 1300083 === setContentView(1300083)

        val heightEditText: EditText = findViewById(R.id.heightEditText) // ? nullable , ! not null
        var weightEditText = findViewById<EditText>(R.id.weightEditText); // <> 타입을 명시적으로 알려주는 역할
        var resultbutton = findViewById<Button>(R.id.resultButton);
        resultbutton.setOnClickListener {
            Log.d("MainActivity", "ResultButton이 클릭되었습니다.")

            if(heightEditText.text.isEmpty() || weightEditText.text.isEmpty()) {
                Toast.makeText(this, "빈 값이 존재합니다.", Toast.LENGTH_SHORT).show() //context?
                return@setOnClickListener
            }

            var height:Int = heightEditText.text.toString().toInt() // toString -> toInt 로 하는 이유가 뭐지?
            var weight:Int = weightEditText.text.toString().toInt()
            Log.d("MainActivity", "$height, $weight")

            val intent = Intent(this, ResultActivity::class.java)
            intent.putExtra("height", height)
            intent.putExtra("weight", weight)

            startActivity(intent)
        }
    }
}