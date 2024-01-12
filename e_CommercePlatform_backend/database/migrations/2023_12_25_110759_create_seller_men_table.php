
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seller_men', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('personalNumber')->unique();
            $table->text('address');
            $table->enum('gender',['male','female']);
            $table->string('phone')->nullable();
           $table->string('PhotoOfPersonalID')->nullable();
           $table->date('birthday');
           $table->enum('status',['Active' ,'Inactive'])->default('Inactive');
           $table->foreignId('role_id')->constrained("roles")->onUpdate('cascade')->onDelete('cascade')->default(0);
           $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seller_men');
    }
};