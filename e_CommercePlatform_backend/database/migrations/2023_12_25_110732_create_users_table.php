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
        Schema::create('users', function (Blueprint $table){
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->foreignId('address_id')->constrained('addresses')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('role_id')->constrained("roles")->onUpdate('cascade')->onDelete('cascade');
            $table->string('country');
            $table->enum('gender',['male','female']);
            $table->string('phone');
            $table->date('birthday');
            $table->enum('status',['Active' ,'Inactive'])->default('Inactive');
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
        Schema::dropIfExists('users');
    }
};